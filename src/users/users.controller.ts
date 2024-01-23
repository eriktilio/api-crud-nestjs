import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersService } from "./users.service";

@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ description: "Usuário criado com sucesso." })
  @ApiBody({
    type: CreateUserDto,
    description: "Dados do usuário a serem enviados",
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOkResponse({ description: "Lista de todos os usuários." })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(":id")
  @ApiOkResponse({ description: "Detalhes do usuário encontrado." })
  @ApiNotFoundResponse({ description: "Usuário não encontrado." })
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(":id")
  @ApiOkResponse({ description: "Usuário atualizado com sucesso." })
  @ApiNotFoundResponse({ description: "Usuário não encontrado." })
  @ApiBadRequestResponse({ description: "Solicitação inválida." })
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  @ApiOkResponse({ description: "Usuário removido com sucesso." })
  @ApiNotFoundResponse({ description: "Usuário não encontrado." })
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }
}
