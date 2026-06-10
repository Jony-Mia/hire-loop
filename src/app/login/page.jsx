"use client";
import usePassword from "@/hook/usePassword";

import { authClient } from "@/lib/auth-client";
import { Envelope, Eye } from "@gravity-ui/icons";
import { Button, Input, InputGroup, Label, TextField } from "@heroui/react";
import { Icon } from "@iconify/react";
import { EyeClosed } from "lucide-react";
import Link from "next/link";

const LoginPage = () => {

    let [passType, setPassType] = usePassword("text")

    async function submit(e) {
        e.preventDefault();
        let form = e.currentTarget;
        let formData = new FormData(form)
        let entries = Object.fromEntries(formData.entries())

        const { data, error } = await authClient.signIn.email({
            email: entries.email,
            password: entries.password,
            callbackURL: "/"
        })

        console.log(entries);

    }
    return (
        <div className="p-3 ">
            <form
                onSubmit={submit}
                encType="multipart/form-data"
                className="w-full sm:w-full md:w-[95%] lg:w-[30%] mx-auto p-5 border border-[#594FFC] rounded-2xl "
            >
                <TextField isRequired>
                    <Label>Enter your email</Label>
                <InputGroup type="email" className={"w-full"} isInvalid={false} >

                    <InputGroup.Input isRequired name="email" type="email" placeholder="Enter your email" />
                    <InputGroup.Suffix>
                        <Button variant="ghost"> <Envelope /> </Button>
                    </InputGroup.Suffix>
                </InputGroup>
                </TextField>
                <br />
                <br />

                <TextField isRequired>
                    <Label>Enter Your password</Label>
                    <InputGroup className={"w-full"} >
                        <InputGroup.Input name="password" placeholder="Enter your password" type={passType} />
                        <InputGroup.Suffix>
                            <Button variant="ghost" onClick={setPassType}> {passType === "text" ? <Eye /> : <EyeClosed />} </Button>
                        </InputGroup.Suffix>
                    </InputGroup>

                </TextField>
                <br />
                <br />
                <Button className={"w-full"} type="submit" >
                    Submit
                </Button>
                <br />

                <Button className="w-full mt-2" variant="tertiary">
                    <Icon icon="devicon:google" />
                    Sign in with Google
                </Button>
                <br />
                <span className="text-center mt-2 block">
                    Doesn't have an account? <Link className="text-blue-400" href={"/signup"}>Sign UP</Link>
                </span>
            </form>
        </div>
    );
};

export default LoginPage;