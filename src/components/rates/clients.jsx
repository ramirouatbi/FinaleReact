import React from "react";
import CardClient from "./cardClient";

export default function Clients() {
  return (
    <div className="grid grid-cols-1 pl-[40px] sm:grid sm:grid-cols-4 md:grid md:grid-cols-4 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4 justify-center w-full h-[50px] mb-[1800px] sm:mb-[500px]">
    <CardClient client={'Amir'} number={'client1'} img={'https://cdn.vuetifyjs.com/images/lists/2.jpg'} review={'Chihaoui offers designers a wide range of high quality finishes. The shapes and colors enliven the exhibition space and immediately bring inspiration. Customer satisfaction at the time of installation is immediately apparent. The company is a very successful representative of an internationally renowned brand.'} />
      <CardClient client={'Samar'} number={'client2'} img={'https://cdn.vuetifyjs.com/images/lists/5.jpg'} review={'For architects, various finishing materials such as coatings, fittings, sanitary ware and woodworking are important factors in the design and final realization of harmonious architectural projects. With this in mind, we have chosen to work with CNTs since 2008. '} />
      <CardClient client={'Maram'} number={'client3'} img={'https://cdn.vuetifyjs.com/images/lists/4.jpg'} review={'Of course, at Chihaoui you can find most of the products you need in the construction sector, such as plumbing, covers, kitchen appliances and garden furniture. But what you see across the team is, above all, great collaboration and responsiveness. And this is the only way we can meet our customers' } />
      <CardClient  client={'Wael'} number={'client4'} img={'https://cdn.vuetifyjs.com/images/lists/1.jpg'} review={'Of course, at Chihaoui you can find most of the products you need in the construction sector, such as plumbing, covers, kitchen appliances and garden furniture. But what you see across the team is, above all, great collaboration and responsiveness. And this is the only way we can meet our customers'}/>
    </div>
  );
}
