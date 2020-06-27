import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import RepoModule from './repo/repo.module';
import UserResolver from './resolvers/user.resolver';
import MessageResolver from './resolvers/message.resolver';

const gqlImports = [UserResolver, MessageResolver];

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RepoModule,
    ...gqlImports,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
      installSubscriptionHandlers: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
