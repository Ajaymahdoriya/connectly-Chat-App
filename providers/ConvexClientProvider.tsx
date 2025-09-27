'use client';

import { LoadingLogo } from '@/components/shared/LoadingLogo';
import { ClerkProvider, useAuth } from '@clerk/nextjs';
import { Authenticated, AuthLoading, ConvexReactClient } from 'convex/react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import React from 'react';

interface Props {
    children: React.ReactNode;
}

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || '';

const convex = new ConvexReactClient(CONVEX_URL);

export const ConvexClientProvider = ({
    children,
  }: ConvexClientProviderProps) => {
    return (
      <ClerkProvider>
        <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
          <Authenticated>{children}</Authenticated>
          <AuthLoading><LoadingLogo></LoadingLogo></AuthLoading>
        </ConvexProviderWithClerk>
      </ClerkProvider>
    );
};