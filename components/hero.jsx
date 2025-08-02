"use client";
import { useState } from 'react';

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, AlertCircle, Loader2, Mail, Shield, Zap } from "lucide-react";
import React from "react";

import { LineShadowText } from "./line-shadow-text";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import Link from "next/link";

const Hero = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    
    if (!email.trim()) {
      setStatus('error');
      setMessage('Veuillez entrer votre email');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setStatus('success');
        setMessage(data.message || 'Inscription réussie ! Vérifiez votre email.');
        setEmail(''); // Vider le champ après succès
      } else {
        setStatus('error');
        setMessage(data.error || 'Erreur lors de l\'inscription.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Erreur de connexion. Veuillez réessayer.');
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'loading':
        return <Loader2 className="h-4 w-4 animate-spin" />;
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'success':
        return 'text-green-600';
      case 'error':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <section className="bg-gradient-to-br from-background via-background to-orange-50/20 relative min-h-screen w-full py-20 overflow-hidden">
      
      {/* Navigation */}
      <div className="relative z-20 flex items-center justify-center gap-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            variant="secondary"
            className="text-md group flex w-fit items-center justify-center gap-2 rounded-full px-6 py-2 tracking-tight hover:bg-orange-100 transition-all duration-300">
            <span><Link href="/about">À propos</Link></span>
            <ArrowRight
              className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Button
            variant="default"
            className="text-md group flex w-fit items-center justify-center gap-2 rounded-full px-6 py-2 tracking-tight bg-orange-500 hover:bg-orange-600 transition-all duration-300">
            <span><Link href="/contact">Contact</Link></span>
            <ArrowRight
              className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
          </Button>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center">
        <div className="bg-background/80 backdrop-blur-sm flex w-fit flex-col items-center justify-center gap-8 pb-8 text-center max-w-6xl mx-auto px-6">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              variant="secondary"
              className="text-md bg-gradient-to-r from-orange-100 to-orange-200 group flex w-fit items-center justify-center gap-3 rounded-full px-6 py-3 tracking-tight border border-orange-200 hover:from-orange-200 hover:to-orange-300 transition-all duration-300">
              <Shield className="size-4 text-orange-600" />
              <span className="text-orange-800 font-medium">Émission sécurisée et traçabilité 100% blockchain</span>
            </Button>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex max-w-5xl items-center justify-center text-center text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            <h1 className="relative z-10 tracking-tighter leading-tight">
              <span className="text-muted-foreground/60 mr-3">
                Vérifiez instantanément l'authenticité des
              </span>
              <LineShadowText> certificats </LineShadowText>
              <span className="text-muted-foreground/60"> </span>
              <span className="text-orange-500">.</span>
            </h1>
            <div className="z-9 bg-background/80 backdrop-blur-sm absolute h-[105%] w-[85%] rounded-2xl" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-background/60 backdrop-blur-sm text-muted-foreground/80 text-xl max-w-3xl leading-relaxed px-6 py-4 rounded-2xl border border-orange-100"
          >
            Blockchain sécurisée, QR code fluides, confiance certifiée. Notre solution révolutionne la vérification des certificats, garantissant une transparence totale et une sécurité inégalée.
          </motion.p>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full max-w-2xl"
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-orange-100">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Restez informé !
                </h2>
                <p className="text-gray-600">
                  Recevez nos dernières actualités et innovations en matière de blockchain
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex gap-3">
                  <Input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Entrez votre adresse email"
                    disabled={status === 'loading'}
                    className="flex-1 h-12 text-lg border-2 border-gray-200 focus:border-orange-500 rounded-xl transition-all duration-300"
                  />
                  <Button
                    type="submit"
                    variant="default"
                    disabled={status === 'loading'}
                    className="h-12 px-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 whitespace-nowrap">
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Inscription...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="h-5 w-5" />
                        <span>S'inscrire</span>
                      </>
                    )}
                  </Button>
                </div>
                
                {/* Message de statut */}
                {message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-3 p-4 rounded-xl text-sm ${getStatusColor()}`}
                  >
                    {getStatusIcon()}
                    <span className="font-medium">{message}</span>
                  </motion.div>
                )}

                <p className="text-xs text-gray-500 text-center">
                  Vos données sont protégées. Désabonnement en un clic.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Illustrations */}
      <Illustration1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0, 0, 0, 1.12] }}
        className="absolute left-0 top-6 hidden text-orange-500/30 lg:block" />
      <Illustration1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0, 0, 0, 1.12] }}
        className="absolute right-0 top-32 hidden scale-x-[-1] scale-y-[-1] text-orange-500/30 lg:block" />
    </section>
  );
};

export { Hero };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Illustration1 = (props) => {
  return (
    <svg
      {...props}
      width="571"
      height="560"
      viewBox="0 0 571 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        stroke="#cccccc"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.2"
        d="M166.571 320.89L166.337 320.448L166.571 320.89ZM-185.483 414.753L-185.029 414.961L-185.483 414.753ZM-90.798 550.017L-90.541 550.446L-90.541 550.446L-90.798 550.017ZM251.609 358.688L251.447 358.215L251.447 358.215L251.609 358.688ZM569.859 394.354C570.073 394.528 570.388 394.496 570.562 394.281C570.736 394.067 570.703 393.752 570.489 393.578L569.859 394.354ZM166.571 320.89L166.337 320.448C84.8815 363.503 5.15738 369.122 -58.3672 372.888C-90.1101 374.77 -117.856 376.19 -139.709 381.614C-161.58 387.041 -177.656 396.504 -185.937 414.544L-185.483 414.753L-185.029 414.961C-176.926 397.312 -161.193 387.976 -139.469 382.584C-117.727 377.188 -90.0926 375.77 -58.308 373.886C5.22228 370.12 85.1407 364.497 166.804 321.332L166.571 320.89ZM-185.483 414.753L-185.937 414.544C-213.037 473.573 -201.627 514.972 -177.119 537.918C-152.665 560.814 -115.234 565.241 -90.541 550.446L-90.798 550.017L-91.055 549.588C-115.323 564.129 -152.27 559.813 -176.436 537.188C-200.548 514.612 -212 473.711 -185.029 414.961L-185.483 414.753ZM-90.798 550.017L-90.541 550.446C-58.5271 531.264 -27.9166 512.042 1.68716 493.418C31.2925 474.794 59.8897 456.769 87.8844 439.978C143.875 406.396 197.433 377.763 251.771 359.161L251.609 358.688L251.447 358.215C197.009 376.851 143.38 405.527 87.37 439.121C59.3643 455.918 30.7575 473.949 1.15467 492.572C-28.4497 511.196 -59.0516 530.413 -91.055 549.588L-90.798 550.017ZM251.609 358.688L251.771 359.161C376.455 316.476 485.473 325.788 569.859 394.354L570.174 393.966L570.489 393.578C485.756 324.729 376.346 315.457 251.447 358.215L251.609 358.688ZM-3.19002 2.72941L-3.12782 3.22553C104.974 -10.3276 201.201 40.6009 243.453 109.09C264.574 143.326 272.197 181.928 261.119 219.065C250.041 256.203 220.237 291.959 166.337 320.448L166.571 320.89L166.804 321.332C220.873 292.754 250.903 256.812 262.077 219.351C273.252 181.891 265.545 142.995 244.304 108.565C201.832 39.719 105.21 -11.365 -3.25222 2.23329L-3.19002 2.72941Z" />
      <motion.path
        initial={{ pathLength: 0, opacity: 0, pathOffset: 0.3 }}
        animate={{
          pathLength: 1,
          pathOffset: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          opacity: { duration: 0.5 },
        }}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M166.571 320.89L166.337 320.448L166.571 320.89ZM-185.483 414.753L-185.029 414.961L-185.483 414.753ZM-90.798 550.017L-90.541 550.446L-90.541 550.446L-90.798 550.017ZM251.609 358.688L251.447 358.215L251.447 358.215L251.609 358.688ZM569.859 394.354C570.073 394.528 570.388 394.496 570.562 394.281C570.736 394.067 570.703 393.752 570.489 393.578L569.859 394.354ZM166.571 320.89L166.337 320.448C84.8815 363.503 5.15738 369.122 -58.3672 372.888C-90.1101 374.77 -117.856 376.19 -139.709 381.614C-161.58 387.041 -177.656 396.504 -185.937 414.544L-185.483 414.753L-185.029 414.961C-176.926 397.312 -161.193 387.976 -139.469 382.584C-117.727 377.188 -90.0926 375.77 -58.308 373.886C5.22228 370.12 85.1407 364.497 166.804 321.332L166.571 320.89ZM-185.483 414.753L-185.937 414.544C-213.037 473.573 -201.627 514.972 -177.119 537.918C-152.665 560.814 -115.234 565.241 -90.541 550.446L-90.798 550.017L-91.055 549.588C-115.323 564.129 -152.27 559.813 -176.436 537.188C-200.548 514.612 -212 473.711 -185.029 414.961L-185.483 414.753ZM-90.798 550.017L-90.541 550.446C-58.5271 531.264 -27.9166 512.042 1.68716 493.418C31.2925 474.794 59.8897 456.769 87.8844 439.978C143.875 406.396 197.433 377.763 251.771 359.161L251.609 358.688L251.447 358.215C197.009 376.851 143.38 405.527 87.37 439.121C59.3643 455.918 30.7575 473.949 1.15467 492.572C-28.4497 511.196 -59.0516 530.413 -91.055 549.588L-90.798 550.017ZM251.609 358.688L251.771 359.161C376.455 316.476 485.473 325.788 569.859 394.354L570.174 393.966L570.489 393.578C485.756 324.729 376.346 315.457 251.447 358.215L251.609 358.688ZM-3.19002 2.72941L-3.12782 3.22553C104.974 -10.3276 201.201 40.6009 243.453 109.09C264.574 143.326 272.197 181.928 261.119 219.065C250.041 256.203 220.237 291.959 166.337 320.448L166.571 320.89L166.804 321.332C220.873 292.754 250.903 256.812 262.077 219.351C273.252 181.891 265.545 142.995 244.304 108.565C201.832 39.719 105.21 -11.365 -3.25222 2.23329L-3.19002 2.72941Z" />
    </svg>
  );
};
