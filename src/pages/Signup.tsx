import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { User, Mail, Lock } from 'lucide-react';

export const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle signup logic here
  };

  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center bg-[#DDE4DE]">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 border border-[#97BC62] hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-center text-[#2C5F2D] mb-8">Create Your Account</h1>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#2C5F2D] mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#97BC62] h-5 w-5" />
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full pl-10 pr-4 py-2 border border-[#97BC62] rounded-lg focus:ring-2 focus:ring-[#2C5F2D] focus:border-[#2C5F2D]"
                  placeholder="John Doe"
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message as string}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2C5F2D] mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#97BC62] h-5 w-5" />
                <input
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  className="w-full pl-10 pr-4 py-2 border border-[#97BC62] rounded-lg focus:ring-2 focus:ring-[#2C5F2D] focus:border-[#2C5F2D]"
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message as string}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2C5F2D] mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#97BC62] h-5 w-5" />
                <input
                  type="password"
                  {...register('password', { 
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters'
                    }
                  })}
                  className="w-full pl-10 pr-4 py-2 border border-[#97BC62] rounded-lg focus:ring-2 focus:ring-[#2C5F2D] focus:border-[#2C5F2D]"
                  placeholder="••••••••"
                />
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message as string}</p>
              )}
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-[#2C5F2D] focus:ring-[#97BC62] border-gray-300 rounded"
                {...register('terms', { required: 'You must accept the terms' })}
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-[#2C5F2D]">
                I agree to the{' '}
                <Link to="/terms" className="text-[#97BC62] hover:text-[#2C5F2D] transition-colors">
                  Terms of Service
                </Link>
                {' '}and{' '}
                <Link to="/privacy" className="text-[#97BC62] hover:text-[#2C5F2D] transition-colors">
                  Privacy Policy
                </Link>
              </label>
            </div>
            {errors.terms && (
              <p className="text-sm text-red-600">{errors.terms.message as string}</p>
            )}

            <button
              type="submit"
              className="w-full bg-[#2C5F2D] text-white py-2 px-4 rounded-lg hover:bg-[#244822] transition-colors"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[#2C5F2D]">
            Already have an account?{' '}
            <Link to="/login" className="text-[#97BC62] hover:text-[#2C5F2D] transition-colors">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};
