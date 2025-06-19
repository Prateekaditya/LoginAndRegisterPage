import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col p-5 gap-5 bg-gradient-to-bl from-stone-300 via-rose-50 to-lime-100 text-transparent bg-clip-text text-justify items-center justify-center ">
        <h1 className="text-4xl font-bold">Hello And Welcome To The HomePage Of Our Website</h1>
        <p className="text-xl font-bold">So this Website is all about login and register </p>
        <p className="text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in enim malesuada, porttitor     nulla vel, vulputate elit. Fusce non dolor nibh. Donec leo arcu, hendrerit et sapien sed, 
          consectetur bibendum ligula. Morbi hendrerit magna sit amet erat lacinia consequat. Aenean suscipit erat est, at vulputate mauris mattis id. Aenean quam augue, finibus ornare libero id, molestie gravida nulla. Morbi imperdiet est id elit dignissim gravida. Cras sed urna 
          <br/><br/>
          rutrum, dictum sem quis, porta erat. Donec faucibus tempus est ac porttitor. Sed vulputate nunc feugiat, sodales risus eu, cursus leo. Quisque mattis dignissim magna, id efficitur lacus condimentum in. Aliquam erat volutpat.
          Nulla facilisi. Duis luctus purus et eros sollicitudin, ac feugiat libero dignissim. Pellentesque neque turpis, sagittis eget nibh non, viverra tempor ante. Etiam ut fringilla 
          <br/><br/>
          ipsum, et pharetra lectus. Duis tristique nibh sed nibh elementum congue. Nullam tincidunt at arcu et efficitur. Donec condimentum accumsan velit non gravida. Aliquam sollicitudin, libero 
          non bibendum laoreet, sapien nibh pretium arcu, at euismod sapien augue sit amet elit.  Vestibulum nec turpis at dolor molestie euismod.</p>
      </div>
    </>
  );
}
