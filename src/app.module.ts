import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MachinesModule } from './machines/machines.module';

@Module({
  imports: [AuthModule, MachinesModule],
})
export class AppModule {}
