'use client'

import { Toaster } from 'react-hot-toast';
import React from 'react';

export default function ToasterContainer() {
    return (
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
    )
}