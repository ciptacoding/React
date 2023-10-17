// Index.jsx
import Input from "./Input";
import Label from "./Label";

const FormInput = (props) => {
   const { label, htmlFor, type, placeholder } = props;

   return (
      <div className="mb-6">
         <Label htmlFor={htmlFor}>{label}</Label>
         <Input type={type} id={htmlFor} placeholder={placeholder} />
      </div>
   );
};

export default FormInput;
