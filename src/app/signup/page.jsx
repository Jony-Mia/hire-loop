// "use client";
// import usePassword from "@/hook/usePassword";
// import { authClient } from "@/lib/auth-client";
// import { Envelope, Eye } from "@gravity-ui/icons";
// import { Button, Input, InputGroup, Label, TextField } from "@heroui/react";
// import { Icon } from "@iconify/react";
// import { EyeClosed } from "lucide-react";
// import Link from "next/link";
// import { redirect } from "next/navigation";
// import { useState } from "react";

// import ClickButton from "@/component/lib/ClickButton";

// const LoginPage = () => {
//     let [preview, setPreview] = useState(null);
//     let [passType, setPassType] = usePassword(false)
//     let [validPass, setValidPass] = useState(false)


//     function imageUpload(e) {
//         let imageFile = e.target.files[0]
//         if (!imageFile) return;
//         let imageUri = URL.createObjectURL(imageFile);

//         setPreview(imageUri)
//     }
//     async function continueWithGoogle(){
//         let {data, error } = await authClient.signIn.social({
//             provider: "google",

//         })
//         console.log(data, error);

//     }
//     async function submit(e) {
//         e.preventDefault();
//         let form = e.currentTarget;
//         let datas = new FormData(form)
//         let entries = Object.fromEntries(datas.entries())
//         let pass = entries.password;
//         let cpass = entries.confirmPassord;
//         console.log(entries);

//         // if (pass === cpass) {
//           let {data, error} = await authClient.signUp.email({
//                 name: entries.firstName,
//                 email: entries.email,
//                 password: entries.password,
//                 // image: entries.image,
//                 callbackURL: "/",
//             })

//         // }

//     }
//     return (
//         <div className="p-3 bg-black dark:text-white" >
//             <form
//                 onSubmit={submit}
//                 encType="multipart/form-data"
//                 className="w-full sm:w-full md:w-[95%] lg:w-[40%] mx-auto p-6 border border-[#594FFC] rounded-2xl "
//             >
//                 <div className="flex flex-wrap lg:flex-nowrap md:flex-wrap sm:flex-wrap gap-3 w-full">
//                     <TextField isRequired name="firstName" className={"w-full"} type="text" >
//                         <Label className="text-white">Enter your first name</Label>
//                         <Input placeholder="Enter your first name" />
//                     </TextField>
//                     <TextField name="lastName" type="text" className={"w-full"} >
//                         <Label className="text-white">Enter your last name</Label>

//                         <Input placeholder="Enter your last name" />
//                     </TextField>
//                 </div>
//                 <br />
//                 <TextField isRequired name="email">
//                     <Label className="text-white">Enter your email</Label>
//                     <InputGroup type="email" className={"w-full"} >

//                         <InputGroup.Input placeholder="Enter your email" />
//                         <InputGroup.Suffix>
//                             <Button variant="ghost"> <Envelope /> </Button>
//                         </InputGroup.Suffix>
//                     </InputGroup>
//                 </TextField>
//                 <br />

//                 <TextField isRequired isInvalid={validPass} name="password">
//                     <Label className="text-white">Create password</Label>
//                     <InputGroup isRequired className={"w-full"} >

//                         <InputGroup.Input name="password" placeholder="Enter your password" type={passType} />
//                         <InputGroup.Suffix>
//                             <Button variant="ghost" onClick={setPassType}> {passType === "text" ? <Eye /> : <EyeClosed />} </Button>
//                         </InputGroup.Suffix>
//                     </InputGroup>
//                 </TextField>
//                 <br />
//                 <TextField isRequired isInvalid={validPass}>
//                     <Label className="text-white">Confirm password</Label>
//                     <InputGroup className={"w-full"} >

//                         <InputGroup.Input name="confirmPassword" placeholder="Confirm password" type={passType} />
//                         <InputGroup.Suffix>
//                             <Button variant="ghost" onClick={setPassType}> {passType === "text" ? <Eye /> : <EyeClosed />} </Button>
//                         </InputGroup.Suffix>
//                     </InputGroup>
//                 </TextField>
//                 <br />
//                  {/*
//                   <div className="mt-0">
//                     <div hidden={preview ? false : true} className="w-full" >
//                         <img
//                             src={preview}
//                             alt={preview}
//                             height={"100"}
//                             width={"100"}
//                             className=" w-full border-[#594FFC] border rounded-2xl"
//                         />
//                     </div>
//                     <br />
//                     <TextField isRequired>
//                         <Label>Upload proflie pic</Label>
//                         <Button variant="outline" className={"w-full"}>
//                             <input
//                                 type="file"
//                                 className="button--primary w-full"
//                                 role="button"
//                                 onChange={imageUpload}
//                                 placeholder="upload your profile"
//                                 name="image"
//                             />
//                         </Button>
//                     </TextField>
//                 </div>  
//                 */}
//                 <br />
//                 <Button className={"w-full my-2"} type="submit" >
//                     Submit
//                 </Button>
//                 <br />
//                 <ClickButton handler={()=>continueWithGoogle()} className="w-full" variant="tertiary">
//                     <Icon icon="devicon:google" />
//                     Sign in with Google
//                 </ClickButton>
//                 <br />
//                 <span className="text-center mt-2 block">
//                     Already have an account? <Link className="text-blue-400" href="/login">Login</Link>
//                 </span>
//             </form> <br />
//         </div>
//     );
// };

// export default LoginPage;


"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { animate, inView, stagger } from "motion";
import { Button, Input, Checkbox, Separator as Divider } from "@heroui/react";
import { authClient } from "@/lib/auth-client";


// ─── Particle Canvas Background ───────────────────────────────────────────────
function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const colors = ["#00e5ff", "#7c3aed", "#4f46e5", "#06b6d4"];
    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.5 + 0.3,
      opacity: Math.random() * 0.6 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let rafId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,229,255,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      rafId = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}

// ─── Holographic Rings (Motion JS animate on refs) ────────────────────────────
function HoloRing() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    if (!outerRef.current || !innerRef.current) return;

    // Motion JS: animate(element, keyframes, options)
    const outer = animate(
      outerRef.current,
      { rotate: [0, 360] },
      { duration: 22, repeat: Infinity, ease: "linear" }
    );

    const inner = animate(
      innerRef.current,
      { rotate: [0, -360] },
      { duration: 14, repeat: Infinity, ease: "linear" }
    );

    return () => {
      outer.stop();
      inner.stop();
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Outer ring */}
      <div
        ref={outerRef}
        className="absolute h-[520px] w-[520px] rounded-full"
        style={{
          border: "1px solid rgba(0,229,255,0.12)",
          boxShadow: "0 0 40px rgba(0,229,255,0.06) inset",
        }}
      >
        <div
          className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400"
          style={{ boxShadow: "0 0 12px 4px rgba(0,229,255,0.7)" }}
        />
      </div>

      {/* Inner counter-ring */}
      <div
        ref={innerRef}
        className="absolute h-[380px] w-[380px] rounded-full"
        style={{ border: "1px dashed rgba(124,58,237,0.2)" }}
      >
        <div
          className="absolute top-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400"
          style={{ boxShadow: "0 0 10px 3px rgba(124,58,237,0.8)" }}
        />
      </div>
    </div>
  );
}

// ─── Animated Input Field ──────────────────────────────────────────────────────
function GlowInput({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}) {
  const scanRef = useRef(null);
  const wrapRef = useRef(null);
  const scanAnimRef = useRef(null);


  const handleFocus = useCallback(() => {
    if (!scanRef.current) return;
    // Fade the scan line in, then loop the sweep
    animate(scanRef.current, { opacity: [0, 1] }, { duration: 0.2 });
    scanAnimRef.current = animate(
      scanRef.current,
      { y: ["0px", "52px", "0px"] },
      { duration: 1.4, repeat: Infinity, ease: "linear" }
    );
  }, []);

  const handleBlur = useCallback(() => {
    if (!scanRef.current) return;
    scanAnimRef.current?.stop();
    animate(scanRef.current, { opacity: 0 }, { duration: 0.2 });
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      {/* Scanning line */}
      <div
        className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-xl"
        aria-hidden="true"
      >
        <div
          ref={scanRef}
          className="h-px w-full"
          style={{
            opacity: 0,
            background:
              "linear-gradient(90deg, transparent, rgba(0,229,255,0.6), transparent)",
          }}
        />
      </div>

      <Input
        label={label}
        placeholder={placeholder}
        type={type}
        variant="bordered"
        className={"w-full bg-transparent borderr border-white/15"}
      />
    </div>
  );
}

// ─── Main Signup Form ──────────────────────────────────────────────────────────
export default function SignupForm() {
  //   const [form, setForm] = useState({ username: "", email: "", password: "" });
  //   const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Refs for Motion JS entrance animations
  const cardRef = useRef(null);
  const headerRef = useRef(null);
  const pillRef = useRef(null);
  const fieldsRef = useRef(null);
  const footerRef = useRef(null);

  // Refs for success state
  const successRef = useRef(null);
  const checkCircleRef = useRef(null);
  const checkRingRef = useRef(null);
  const checkPathRef = useRef(null);
  const checkRingAnimRef = useRef(null);

  // Shimmer button refs
  const shimmerRef = useRef(null);
  const shimmerAnimRef = useRef(null);

  // ── Card entrance on mount ──
  useEffect(() => {
    if (!cardRef.current) return;

    animate(
      cardRef.current,
      { opacity: [0, 1], y: [32, 0], scale: [0.96, 1] },
      { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    );
  }, []);

  // ── Staggered field/header entrance via inView ──
  useEffect(() => {
    const targets = [pillRef, headerRef, fieldsRef, footerRef]
      .map((r) => r.current)
      .filter(Boolean)

    if (!targets.length) return;

    // Set initial hidden state
    targets.forEach((el) => {
      (el).style.opacity = "0";
      (el).style.transform = "translateY(12px)";
    });

    const cleanup = inView(cardRef.current, () => {
      animate(
        targets,
        { opacity: [0, 1], y: [12, 0] },
        { delay: stagger(0.1, { start: 0.15 }), duration: 0.45, ease: "easeOut" }
      );
    });

    return cleanup;
  }, []);

  // ── Shimmer sweep on button ──
  useEffect(() => {
    if (!shimmerRef.current) return;

    const loop = () => {
      if (!shimmerRef.current) return;
      shimmerAnimRef.current = animate(
        shimmerRef.current,
        { x: ["-100%", "200%"] },
        {
          duration: 2.2,
          ease: "easeInOut",
          onComplete: () => setTimeout(loop, 1500),
        }
      );
    };
    const t = setTimeout(loop, 800);
    return () => {
      clearTimeout(t);
      shimmerAnimRef.current?.stop();
    };
  }, []);

  // ── Success animations ──
  const playSuccess = useCallback(() => {
    if (!successRef.current || !checkCircleRef.current || !checkPathRef.current)
      return;

    // Fade in the whole success block
    animate(
      successRef.current,
      { opacity: [0, 1], scale: [0.9, 1] },
      { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    );

    // Scale-in the check circle
    animate(
      checkCircleRef.current,
      { scale: [0, 1], opacity: [0, 1] },
      { duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }
    );

    // Draw the checkmark via strokeDashoffset
    const path = checkPathRef.current;
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;
    animate(
      path,
      { strokeDashoffset: [len, 0] },
      { duration: 0.6, delay: 0.35, ease: "easeOut" }
    );

    // Spin the dashed ring
    if (checkRingRef.current) {
      checkRingAnimRef.current = animate(
        checkRingRef.current,
        { rotate: [0, 360] },
        { duration: 8, repeat: Infinity, ease: "linear" }
      );
    }
  }, []);

  // Run success anim whenever submitted flips true
  useEffect(() => {
    if (submitted) {
      // Small delay so the DOM has swapped
      const t = setTimeout(playSuccess, 50);
      return () => clearTimeout(t);
    } else {
      checkRingAnimRef.current?.stop();
    }
  }, [submitted, playSuccess]);

  const handleSubmit = async () => {
    // if (!form.username || !form.email || !form.password || !agreed) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setSubmitted(true);
  };

  // Continue google sign in
  async function continueWithGoogle() {
    let { data, error } = await authClient.signIn.social({
      provider: "google",
      additionalData:{
        role:"seeker"
      }
    })
    console.log(data, error);

  }

  return (
    <>
      {/* ── Deep space background ── */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(0,229,255,0.08) 0%, transparent 50%), #050811",
        }}
      />

      <ParticleField />

      {/* ── Page layout ── */}
      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <div className="relative w-full max-w-md">
          <HoloRing />

          {/* ── Glass card ── */}
          <div
            ref={cardRef}
            className="relative overflow-hidden rounded-3xl p-8"
            style={{
              opacity: 0, // Motion JS will animate this in
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
              backdropFilter: "blur(28px) saturate(180%)",
              WebkitBackdropFilter: "blur(28px) saturate(180%)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow:
                "0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04) inset, 0 1px 0 rgba(255,255,255,0.1) inset",
            }}
          >
            {/* Inner top highlight */}
            <div
              className="pointer-events-none absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
              }}
            />

            {/* ────────────────── FORM STATE ────────────────── */}
            {!submitted ? (
              <div className="flex flex-col gap-6">
                {/* Status pill */}
                <div ref={pillRef} className="flex justify-center">
                  <div
                    className="flex items-center gap-2 rounded-full px-3 py-1 text-xs font-mono tracking-widest text-cyan-400"
                    style={{
                      background: "rgba(0,229,255,0.08)",
                      border: "1px solid rgba(0,229,255,0.2)",
                    }}
                  >
                    <PulsingDot />
                    NEXUS OS v3.1 · SECURE CHANNEL
                  </div>
                </div>

                {/* Header */}
                <div ref={headerRef} className="space-y-1 text-center">
                  <h1
                    className="text-3xl font-black tracking-tight text-white"
                    style={{ fontFamily: "'Orbitron', monospace" }}
                  >
                    INITIALIZE
                  </h1>
                  <p className="text-sm text-slate-400 tracking-wide">
                    Create your neural identity
                  </p>
                </div>

                {/* Fields */}
                <div ref={fieldsRef} className="flex flex-col gap-4">
                  <GlowInput
                    label="Username"
                    placeholder="Username"
                  />
                  <GlowInput
                    label="Email Address"
                    placeholder="example@ex.com"
                    type="email"

                  />
                  <GlowInput
                    label="Password"
                    placeholder="••••••••••••"
                    type="password"
                  />
                </div>

                {/* Footer: checkbox + button + OAuth */}
                <div ref={footerRef} className="flex flex-col gap-5">

                  <Button
                    onPress={handleSubmit}
                    isLoading={loading}
                    fullWidth
                    size="lg"
                    className="relative h-14 overflow-hidden rounded-xl font-bold tracking-widest text-black"
                    style={{
                      fontFamily: "'Orbitron', monospace",
                      fontSize: "13px",
                      background:
                        "linear-gradient(135deg, #00e5ff 0%, #4f46e5 100%)",
                      boxShadow: "0 0 32px rgba(0,229,255,0.25)",
                    }}
                  >
                    {!loading && (
                      <span
                        ref={shimmerRef}
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)",
                          transform: "translateX(-100%)",
                        }}
                      />
                    )}
                    {loading ? "ESTABLISHING LINK…" : "ESTABLISH LINK"}
                  </Button>

                  {/* OAuth */}
                  <div className="space-y-3">
                    <Divider className="bg-white/[0.08]" />
                    <div className="grid grid-cols-1 gap-y-1">
                      {["GITHUB", "GOOGLE"].map((p) => (
                        <>
                          <Button
                            key={p}
                            variant="bordered"
                            size="sm"
                            className="h-10 rounded-xl border-white/10 font-mono text-xs tracking-widest text-slate-400 hover:border-white/25 hover:text-white transition-all w-full"
                            style={{ background: "rgba(255,255,255,0.02)" }}
                            onClick={p==="GOOGLE"?()=>continueWithGoogle() : ()=>{}}
                          >
                            {p}
                          </Button>
                          <br />
                        </>
                      ))}
                    </div>
                    <p className="text-center text-xs text-slate-500">
                      Already synchronized?{" "}
                      <span className="cursor-pointer text-cyan-400 hover:text-cyan-300 transition-colors">
                        Access terminal →
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              /* ────────────────── SUCCESS STATE ────────────────── */
              <div
                ref={successRef}
                className="flex flex-col items-center gap-6 py-8 text-center"
                style={{ opacity: 0 }}
              >
                {/* Check circle + spinning ring */}
                <div className="relative flex items-center justify-center">
                  <div
                    ref={checkCircleRef}
                    className="flex h-20 w-20 items-center justify-center rounded-full"
                    style={{
                      opacity: 0,
                      scale: "0",
                      background:
                        "linear-gradient(135deg, rgba(0,229,255,0.15), rgba(124,58,237,0.15))",
                      border: "1px solid rgba(0,229,255,0.3)",
                      boxShadow: "0 0 40px rgba(0,229,255,0.2)",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-9 w-9"
                      aria-hidden="true"
                    >
                      <path
                        ref={checkPathRef}
                        d="M5 13l4 4L19 7"
                        stroke="#00e5ff"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Spinning dashed ring behind circle */}
                  <div
                    ref={checkRingRef}
                    className="pointer-events-none absolute h-[96px] w-[96px] rounded-full"
                    style={{ border: "1px dashed rgba(0,229,255,0.3)" }}
                  />
                </div>

                <div className="space-y-2">
                  <h2
                    className="text-2xl font-black text-white tracking-wide"
                    style={{ fontFamily: "'Orbitron', monospace" }}
                  >
                    LINK ACTIVE
                  </h2>
                  <p className="text-sm text-slate-400">
                    Neural identity confirmed.
                  </p>
                  <p className="font-mono text-xs text-cyan-400 tracking-widest">
                    {/* {form.email} */}
                    email assets
                  </p>
                </div>

                <Button

                  variant="bordered"
                  className="rounded-xl border-white/10 font-mono text-xs tracking-widest text-slate-400 hover:border-cyan-400/40 hover:text-cyan-400 transition-all"
                >
                  RESET TERMINAL
                </Button>
              </div>
            )}
          </div>

          {/* Bottom ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 h-24 w-64 -translate-x-1/2 translate-y-1/2 rounded-full"
            style={{ background: "rgba(0,229,255,0.06)", filter: "blur(30px)" }}
          />
        </div>
      </main>
    </>
  );
}

// ─── Tiny pulsing dot (CSS only, no Motion needed for simple pulse) ────────────
function PulsingDot() {
  const dotRef = useRef(null);

  useEffect(() => {
    if (!dotRef.current) return;
    const anim = animate(
      dotRef.current,
      { opacity: [1, 0.3, 1] },
      { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
    );
    return () => anim.stop();
  }, []);

  return (
    <span
      ref={dotRef}
      className="h-1.5 w-1.5 rounded-full bg-cyan-400"
      aria-hidden="true"
    />
  );
}