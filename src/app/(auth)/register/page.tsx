"use client"
import FormInput from '@/components/FormInput';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';
import React, { useState } from 'react'

const Register = () => {
  const [profile, setProfile] = useState({ profileBio: "", profilePhoto: "" });
  const [resume, setResume] = useState({ profileResume: "", profileResumeOriginalName: "" });
  return (
    <div className='text-white'>
      <form action="">
        <h1 className='font-bold text-2xl mb-4 text-yellow-400 text-center'>Sign Up</h1>
        <FormInput
          label="Full Name" type="text" name="fullname" placeholder="Enter your name"
        />
        <FormInput
          label="Email" type="email" name="email" placeholder="Enter email"
        />
        <FormInput
          label="Phone Number" type="text" name="phoneNumber" placeholder="Enter your phone number"
        />
        <FormInput
          label="Password" type="password" name="password" placeholder="Enter Password"
        />
        {
          profile?.profilePhoto ? (
            <>
              <Label>Profile Photo</Label>
              <div>
                <Avatar>
                  <AvatarImage />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <X size={14} className="absolute -top-1 -right-1 z-10 cursor-pointer" onClick={() => setProfile({ profileBio: "", profilePhoto: "" })} />
              </div>
            </>
          ) : (
            <FormInput
              label="upload photo"
              type="file"
              name="picture"
              placeholder="Ente your profile photo"
            // onChange=""
            />
          )
        }
        <FormInput
          label="Profile Skills" type="text" name="profileSkills" placeholder="Enter the profile skills with commas"
        />
        {resume?.profileResume ?
          <>
            <Label>Resume</Label>
            <div>
              <object data={resume?.profileResume} type="application/pdf" width="50%" height="50%">
                <p>Alternative text - include a link <a href={resume?.profileResume}>to the pdf</a> </p>
              </object>
              <X size={14} className="absolute -top-1 -right-1 z-10 cursor-pointer" onClick={() => setResume({ profileResume: "", profileResumeOriginalName: "" })} />
            </div>
          </>
          : (
            <FormInput
              label="Upload Resume" type="file" name="picture"
            />
          )}
      </form>
    </div>
  )
}

export default Register;