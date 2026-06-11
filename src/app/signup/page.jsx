"use client";
import usePassword from "@/hook/usePassword";
import { authClient } from "@/lib/auth-client";
import { Envelope, Eye } from "@gravity-ui/icons";
import { Button, Input, InputGroup, Label, TextField } from "@heroui/react";
import { Icon } from "@iconify/react";
import { EyeClosed } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

import ClickButton from "@/component/lib/ClickButton";

const LoginPage = () => {
    let [preview, setPreview] = useState(null);
    let [passType, setPassType] = usePassword(false)
    let [validPass, setValidPass] = useState(false)

    
    function imageUpload(e) {
        let imageFile = e.target.files[0]
        if (!imageFile) return;
        let imageUri = URL.createObjectURL(imageFile);

        setPreview(imageUri)
    }
    async function continueWithGoogle(){
        let {data, error } = await authClient.signIn.social({
            provider: "google",

        })
        console.log(data, error);
        
    }
    async function submit(e) {
        e.preventDefault();
        let form = e.currentTarget;
        let datas = new FormData(form)
        let entries = Object.fromEntries(datas.entries())
        let pass = entries.password;
        let cpass = entries.confirmPassord;
        console.log(entries);
        
        // if (pass === cpass) {
          let {data, error} = await authClient.signUp.email({
                name: entries.firstName,
                email: entries.email,
                password: entries.password,
                // image: entries.image,
                callbackURL: "/",
            })
            
        // }
        
    }
    return (
        <div className="p-3 bg-black dark:text-white" >
            <form
                onSubmit={submit}
                encType="multipart/form-data"
                className="w-full sm:w-full md:w-[95%] lg:w-[40%] mx-auto p-6 border border-[#594FFC] rounded-2xl "
            >
                <div className="flex flex-wrap lg:flex-nowrap md:flex-wrap sm:flex-wrap gap-3 w-full">
                    <TextField isRequired name="firstName" className={"w-full"} type="text" >
                        <Label className="text-white">Enter your first name</Label>
                        <Input placeholder="Enter your first name" />
                    </TextField>
                    <TextField name="lastName" type="text" className={"w-full"} >
                        <Label className="text-white">Enter your last name</Label>

                        <Input placeholder="Enter your last name" />
                    </TextField>
                </div>
                <br />
                <TextField isRequired name="email">
                    <Label className="text-white">Enter your email</Label>
                    <InputGroup type="email" className={"w-full"} >

                        <InputGroup.Input placeholder="Enter your email" />
                        <InputGroup.Suffix>
                            <Button variant="ghost"> <Envelope /> </Button>
                        </InputGroup.Suffix>
                    </InputGroup>
                </TextField>
                <br />

                <TextField isRequired isInvalid={validPass} name="password">
                    <Label className="text-white">Create password</Label>
                    <InputGroup isRequired className={"w-full"} >

                        <InputGroup.Input name="password" placeholder="Enter your password" type={passType} />
                        <InputGroup.Suffix>
                            <Button variant="ghost" onClick={setPassType}> {passType === "text" ? <Eye /> : <EyeClosed />} </Button>
                        </InputGroup.Suffix>
                    </InputGroup>
                </TextField>
                <br />
                <TextField isRequired isInvalid={validPass}>
                    <Label className="text-white">Confirm password</Label>
                    <InputGroup className={"w-full"} >

                        <InputGroup.Input name="confirmPassword" placeholder="Confirm password" type={passType} />
                        <InputGroup.Suffix>
                            <Button variant="ghost" onClick={setPassType}> {passType === "text" ? <Eye /> : <EyeClosed />} </Button>
                        </InputGroup.Suffix>
                    </InputGroup>
                </TextField>
                <br />
                 {/*
                  <div className="mt-0">
                    <div hidden={preview ? false : true} className="w-full" >
                        <img
                            src={preview}
                            alt={preview}
                            height={"100"}
                            width={"100"}
                            className=" w-full border-[#594FFC] border rounded-2xl"
                        />
                    </div>
                    <br />
                    <TextField isRequired>
                        <Label>Upload proflie pic</Label>
                        <Button variant="outline" className={"w-full"}>
                            <input
                                type="file"
                                className="button--primary w-full"
                                role="button"
                                onChange={imageUpload}
                                placeholder="upload your profile"
                                name="image"
                            />
                        </Button>
                    </TextField>
                </div>  
                */}
                <br />
                <Button className={"w-full my-2"} type="submit" >
                    Submit
                </Button>
                <br />
                <ClickButton handler={()=>continueWithGoogle()} className="w-full" variant="tertiary">
                    <Icon icon="devicon:google" />
                    Sign in with Google
                </ClickButton>
                <br />
                <span className="text-center mt-2 block">
                    Already have an account? <Link className="text-blue-400" href="/login">Login</Link>
                </span>
            </form> <br />
        </div>
    );
};

export default LoginPage;