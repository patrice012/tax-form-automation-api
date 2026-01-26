import * as path from 'path';
import * as fs from 'fs/promises';

export async function getData(): Promise<any> {
  try {
    // MOCK MODE: For now, always return mock data
    console.log('🧪 MOCK MODE: Loading data from local JSON file');

    const filePath = path.join(__dirname, 'proconnect_dev.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContent);

    console.log('✅ Mock data loaded successfully');
    console.log(`   - Forms count: ${data?.documents?.forms?.length || 0}`);
    console.log(`   - Client email: ${data?.documents?.targetClient?.email || 'N/A'}`);
    console.log(`   - Tax year: ${data?.documents?.targetClient?.taxYear || 'N/A'}`);

    return data.documents;
  } catch (error) {
    console.error('❌ Error loading mock data:', error);
    throw new Error(`Failed to load mock data: ${error.message}`);
  }
}

/*
// REAL API MODE: Uncomment this function when ready to use real backend API
import { ExportPreparationDto } from '@/proconnect/dto/proconnect.dto';

export async function getData(
  proconnectPreparation: ExportPreparationDto,
  accessToken: string,
  backendApiUrl?: string,
): Promise<any> {
  try {
    const BACKEND_API = backendApiUrl || process.env.BACKEND_API_URL;

    if (!BACKEND_API) {
      throw new Error(
        'Backend API URL is not configured. Please set BACKEND_API_URL in environment variables.',
      );
    }

    const getDataUrl = `${BACKEND_API}/app-integration/proconnect/preparation`;

    console.log(`📡 Calling backend API: ${getDataUrl}`);
    console.log(`   - Preparation ID: ${proconnectPreparation.preparationId}`);
    console.log(`   - Documents to export: ${proconnectPreparation.documentIdsToExport.join(', ')}`);

    const response = await fetch(getDataUrl, {
      method: 'POST',
      body: JSON.stringify({
        preparationId: proconnectPreparation.preparationId,
        documentIdsToExport: proconnectPreparation.documentIdsToExport,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('✅ Data received from backend API');
    return data.documents;
  } catch (error) {
    console.error('❌ Error fetching data:', error);
    throw error;
  }
}
*/
