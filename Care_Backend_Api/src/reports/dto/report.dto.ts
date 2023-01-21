import { Expose, Transform } from 'class-transformer';

export class ReportDto {
  @Expose()
  id: number;

  @Expose()
  price: string;

  @Expose()
  year: string;

  @Expose()
  lng: string;

  @Expose()
  lat: number;

  @Expose()
  make: number;

  @Expose()
  model: number;

  @Expose()
  approved: boolean;

  @Expose()
  mileage: number;

  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}
