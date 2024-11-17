import React from 'react'


const page = () => {
  return (
    <nav className= "flex items-center justify-between py-4 px-6 border-b">
      <a href="/" className="logo">Logo</a>
      <ul className="flex gap-6">
        <Navlinks href="/about" name="Home" />
        <Navlinks href="/about" name="About" />
        <Navlinks href="/about" name="Blog" />
      </ul>
      <div className="flex gap-4">
        <button className='border border-black rounded-md px-4 py-2'>Sign in</button>
        <button className='bg-blue-600 text-white rounded-md px-4 py-2'>Sign out</button>
      </div>
    </nav>
  );
};

const Navlinks = ({ href, name }) => {
  return (
    <li>
      <a className="hover:underline" href={href}>
        {name}
      </a>
    </li>
  );
};

export default page;

