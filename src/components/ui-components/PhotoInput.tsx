import { useState } from "react";
import { Subtitle } from "./Subtitle";
import { encode } from "js-base64";

export const PhotoInput: React.FC<any> = ({
  formData,
  withLoad = true,
  withLabel = true,
  defultAvatar = "",
  source = "",
}) => {
  const [avatar, setAvatar] = useState<string>(defultAvatar);
  return (
    <label className="auth__form--avatar-wrapper">
      {withLoad ? (
        <input
          type="file"
          className="auth__form--file-input"
          accept=".jpg, .jpeg, .png"
          onChange={(event) => {
            const file = event.target?.files?.item(0);
            if (file !== null && file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                formData.current.photoBytes = encode(reader.result as string);
                setAvatar(reader.result as string);
              };
              reader.readAsDataURL(file);
            }}}/>):""}
            <div className="auth__form--avatar-border" style={{backgroundImage:`url("${avatar}")`}}>
              <img src={source} className="auth__form--avatar" style={{zIndex:`${avatar?"-1":""}`}}/>
            </div>
      {withLabel ? (
        <Subtitle className="auth__form--input-title" title="Фото" />
      ) : (
        ""
      )}
    </label>
  );
};
