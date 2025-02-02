"use client";

import Link from "next/link";
const IndexPage = () => (
  <div>
    <h1>Minimal Next</h1>
    <h2>Links</h2>
    <ul>
      <li>
        <strong>dynamic = error</strong>
      </li>
      <li>
        <a href="/test1/1">/test1/1 (normal link)</a>
      </li>
      <li>
        <a href="/test1/105">/test1/105 error 404 (normal link)</a>
      </li>
      <li>
        <Link href="/test1/2">/test1/2 (next/link)</Link>
      </li>
      <li>
        <Link href="/test1/3" prefetch={false}>
          /test1/3 (next/link prefetch=false)
        </Link>
      </li>
      <li>
        <strong>dynamic = force-static</strong>
      </li>
      <li>
        <a href="/test2/1">/test2/1 (normal link)</a>
      </li>
      <li>
        <a href="/test2/105">/test2/105 error 404 (normal link)</a>
      </li>
      <li>
        <Link href="/test2/2">/test2/2 (next/link)</Link>
      </li>
      <li>
        <Link href="/test2/3" prefetch={false}>
          /test2/3 (next/link prefetch=false)
        </Link>
      </li>
      <li>
        <strong>no settings</strong>
      </li>
      <li>
        <a href="/test3/1">/test3/1 (normal link)</a>
      </li>
      <li>
        <a href="/test3/105">/test3/105 error 404 (normal link)</a>
      </li>
      <li>
        <Link href="/test3/2">/test3/2 (next/link)</Link>
      </li>
      <li>
        <Link href="/test3/3" prefetch={false}>
          /test3/3 (next/link prefetch=false)
        </Link>
      </li>
    </ul>
    <p>testing changes...</p>
  </div>
);

export default IndexPage;
