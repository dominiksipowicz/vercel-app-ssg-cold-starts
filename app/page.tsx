"use client";

import Link from "next/link";
const IndexPage = () => (
  <div>
    <h1>Minimal Next</h1>
    <h2>Links</h2>
    <ul>
      <li>
        <a href="/1">/1 (normal link)</a>
      </li>
      <li>
        <Link href="/2">/2 (next/link)</Link>
      </li>
      <li>
        <Link href="/2" prefetch={false}>
          /2 (next/link prefetch=false)
        </Link>
      </li>
    </ul>
  </div>
);

export default IndexPage;
