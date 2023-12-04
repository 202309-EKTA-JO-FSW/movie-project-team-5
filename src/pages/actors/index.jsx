import React from "react";
import Link from "next/link";

export default async function page() {
  // const res = await fetch("/actors");
  /// need to fetch data//////
  const actor = await res.json();
  const actors = actor.map((e) => {
    return (
      <Link href={`/actors/${e.id}`}>
        <div
          style={{
            width: "100%",
            padding: "10px",
            background: "white",
            color: "black",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        >
          <h1>{e.title}</h1>
          <p>{e.body}</p>
        </div>
      </Link>
    );
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {actors}
    </div>
  );
}
