'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    email: '',
    country: '',
    inquiry_type: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const inquiryOptions = ['General', 'Support', 'Sales', 'Feedback'];

  const handleChange = (e:any) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const res = await fetch('http://try-headless.local/wp-json/custom/v1/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        setStatus('Form submitted successfully! 🎉');
        setFormData({
          first_name: '',
          email: '',
          country: '',
          inquiry_type: '',
          message: ''
        });
      } else {
        setStatus('Failed to submit the form.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Error submitting form.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <Label htmlFor="first_name">First Name</Label>
        <Input id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="country">Country</Label>
        <Input id="country" name="country" value={formData.country} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="inquiry_type">Inquiry Type</Label>
        <Select
          value={formData.inquiry_type}
          onValueChange={(value) => setFormData({...formData, inquiry_type: value})}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Inquiry Type" />
          </SelectTrigger>
          <SelectContent>
            {inquiryOptions.map((option) => (
              <SelectItem key={option} value={option}>{option}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" value={formData.message} onChange={handleChange} />
      </div>
      <Button type="submit">Send</Button>
      {status && <p className="mt-2">{status}</p>}
    </form>
  );
}