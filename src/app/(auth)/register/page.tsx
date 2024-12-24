"use client"
import FormInput from '@/components/FormInput';
import SelectForm from '@/components/SelectForm';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import Link from 'next/link';
import { register } from '@/actions/user';

const Register = () => {
  const [profile, setProfile] = useState({ profileBio: "", profilePhoto: "" });
  const [resume, setResume] = useState({ profileResume: "", profileResumeOriginalName: "" });

  const handleSubmit = async (formData)=>{
      const resposne = await register(formData,profile,resume);
  }
  return (
    <div className='flex items-center justify-center max-w-7xl mx-auto mb-12 '>
      <form action={handleSubmit} className='w-1/2 border border-gray-200 rounded p-4 bg-gray-100 my-6'>
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
          <SelectForm name='role' placeholder='Select a user role' list={["student","recruiter"]}/>

          <Button type="submit" className="w-full my-4 bg-yellow-400/90 hover:bg-yellow-400/95">Sign Up</Button>
          <span>Already have an account? <Link href="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register;