import logger from '@/utils/logger';
import { getData } from '../dataFetcher/getData';
import { Form } from '@/utils/types';

export async function getClientInformation(
  accessToken: string,
): Promise<{
  email: string;
  nameString: string;
  taxYear: string;
  formData: Form[];
}> {
  try {
    // Note: accessToken is kept for future API integration
    // Currently using mock data, so this parameter is not used
    const data = await getData();
    const email = data?.targetClient?.email;

    // FIX: Handle missing type field - assume INDIVIDUAL if not specified
    // This ensures backward compatibility with API responses that don't include type
    const clientType = data?.targetClient?.type || 'INDIVIDUAL';
    const nameString =
      clientType === 'INDIVIDUAL'
        ? `${data?.targetClient?.lastName}, ${data?.targetClient?.firstName}`
        : data?.targetClient?.firstName;

    const taxYear = data?.targetClient?.taxYear;
    const formData = data?.forms;

    logger.info(
      `Client Info - Email: ${email}, Name: ${nameString}, Year: ${taxYear}, Forms: ${formData?.length || 0}`,
    );

    return {
      email: email ? email?.trim() : '',
      nameString: nameString || '',
      taxYear: taxYear?.toString() || '',
      formData: formData || [],
    };
  } catch (error) {
    logger.error(`Fail getting client email, ${error}`);
    return { email: '', nameString: '', taxYear: '', formData: [] as Form[] };
  }
}
