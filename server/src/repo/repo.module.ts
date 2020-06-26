import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import User from '../db/models/user.entity';
import Message from '../db/models/message.entity';
import RepoService from './repo.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User, Message])],
  providers: [RepoService],
  exports: [RepoService],
})
class RepoModule {}

export default RepoModule;
