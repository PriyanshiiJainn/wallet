"use client";

import { useSession, signOut } from "next-auth/react";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p>Not logged in</p>;
  }

  const testProtectedApi = async () => {
    const res = await fetch("/api/user");
    const data = await res.json();
    console.log("Protected API response:", data);
  };

  return (
    <div style={{ padding: 32 }}>
      <h2>User Dashboard</h2>

      <p><strong>User ID:</strong> {session.user.id}</p>
      <p><strong>Phone:</strong> {session.user.phone}</p>

      <button onClick={testProtectedApi}>
        Test Protected API
      </button>

      <br /><br />

      <button onClick={() => signOut()}>
        Logout
      </button>
    </div>
  );
}
