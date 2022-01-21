export interface MethodModel{
  id?:number,
  name:string,
  id_category:number,
  category?:{name:string},
  user?:{email:string},
  id_user:number,
  code:string,
  description:string
}