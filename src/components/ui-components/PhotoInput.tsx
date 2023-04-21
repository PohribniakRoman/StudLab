export const PhotoInput:React.FC<any> = ({formData}) => {
    return(
        <label>
            <input type="file" className="auth__form--file-input" accept=".jpg, .jpeg, .png" onChange={(event)=>{
                const file = event.target?.files?.item(0);
                if(file!==null && file){
                    const reader = new FileReader();
                    reader.onloadend = () =>{
                        formData.current.photo(reader.result);
                    }
                    reader.readAsDataURL(file);
                }
                
            }}/>
            <div className="auth__form--avatar"style={{backgroundImage:`url(${formData.current.photo})`}}></div>
        </label>
    )
}