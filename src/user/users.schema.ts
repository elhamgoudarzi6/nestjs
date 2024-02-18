import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class User {
    @Prop({ required: true })
    mobile: string;

    @Prop()
    name: string;

    @Prop()
    age: number;
}
export const UserSchema = SchemaFactory.createForClass(User);