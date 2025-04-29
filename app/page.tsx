"use client";
import React from "react";
import { useEffect } from "react";
import { app, analytics } from "@/lib/firebase";

export default function Home() {
  useEffect(() => {
    console.log("Firebase initialized:", app.name);
  }, []);

  return (
    <div>
      <h1>Beranda</h1>
    </div>
  );
}
