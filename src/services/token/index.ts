class Token{
    protected tokenName: string;
    protected getToken: string | null;
    constructor(){
        this.tokenName='token'
        this.getToken=localStorage.getItem(this.tokenName)
    }

    checkTokenIsNull(){
        if(this.getToken === null){
            return true
        }else{
            return false
        }
    }

   declare(){
     localStorage.setItem(this.tokenName,'')
   }
   getTokenValue(){
    return this.getToken
   }
   createToken(token:string){
        localStorage.setItem(this.tokenName,token)
   } 
} //end of class

export const useToken=()=>{
    return new Token();
}