import React, { useEffect } from 'react';
import Router from 'next/router';

export default function SeniorMissionsPage() {
  useEffect(() => {
    Router.push('/under-construction');
  });

  return (
    <>
      <div className="test">Hello</div>
    </>
  );
}
