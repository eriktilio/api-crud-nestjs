import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, Length, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @Length(3, 10)
  @Transform(({ value }) => value.toLowerCase())
  @ApiProperty({ description: "Nome do usuário", minLength: 3, maxLength: 10 })
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ description: "Endereço de e-mail válido" })
  readonly email: string;

  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({ description: "Senha do usuário, mínimo de 8 caracteres" })
  readonly password: string;

  @Exclude()
  id: number;
}
