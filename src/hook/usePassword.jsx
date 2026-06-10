"use client";
import { useState } from "react";

const usePassword = (type)=>{
    const [value, setValue] = useState(type);
    const handler = ()=> setValue(v=> v === !type ?"password":"text");
    return [value, handler];
}
export default usePassword;