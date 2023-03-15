class Token{
    public tokenName: string;
    public getToken: string | null;
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

    checkTokenIsEmpty(){
        if(this.getToken?.trim().length! < 1 ){
            return true
        }else{
            return false
        }
    }

   declare(){
     if(this.checkTokenIsNull() === true )localStorage.setItem(this.tokenName,'')
   }

   clear(){
       return localStorage.setItem(this.tokenName,'')
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