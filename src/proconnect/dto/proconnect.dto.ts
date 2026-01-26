import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ExportPreparationDto {
  @IsOptional()
  @IsBoolean()
  autoNavigateToReturn?: boolean;
}

export class ImportClientsDto {
  @IsNotEmpty()
  @IsString()
  orgId: string;

  @IsNotEmpty()
  @IsString()
  clientId: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  taxIdentifier: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  state: string;

  @IsOptional()
  @IsString()
  zip: string;

  @IsOptional()
  @IsString()
  country: string;

  @IsOptional()
  @IsString()
  clientType: string;
}

export class ClientsListDto {
  @IsNotEmpty()
  clientsList: ImportClientsDto[];
}
