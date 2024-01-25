import React from 'react'
import Postauthor from '../Components/Postauthor';
import { Link } from 'react-router-dom';
import thumbnail from "../assets/mern-blog-assets-main/blog1.jpg";
import { MdThumbUp } from "react-icons/md";
import { MdThumbDown } from "react-icons/md";

const PostDetails = () => {
  return (
    <section className="p-5 font-poppins">
      <div className="max-w-[70vw] rounded-md bg-white mx-auto flex flex-col p-10">
        <div className="flex justify-between">
          <Postauthor author_id={1}/>
          <div className="flex gap-2 items-center max-lg:hidden">
            <Link to={"/post/Editpost/1"} className="btn btn-info btn-sm">EditPost</Link>
            <Link to={"/post/DeletePost/1"} className="btn btn-error btn-sm">DeletePost</Link>
          </div>
        </div>
        <h1 className="my-5 text-xl font-black">Title of the Artical</h1>
        <figure className="mb-5">
          <img src={thumbnail} className="max-h-[70vh] w-full rounded-md"/>
        </figure>
        <div className="mx-2 text-[#1e1e1e] font-Roboto font-medium">
        <p className="my-2 text-sm text-justify indent-16">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, delectus! Officia sint sit distinctio reiciendis enim totam cumque eligendi veritatis!</p>
        <p className="my-2 text-sm text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae exercitationem illo magnam maiores unde doloribus aut tempore tenetur, ducimus inventore iste nobis aliquam ea dolores deserunt suscipit maxime minus laudantium incidunt voluptates perspiciatis. Sapiente cumque explicabo maiores maxime, omnis adipisci illum ut in, enim laudantium laboriosam suscipit ea reprehenderit ipsum incidunt quasi. Dolorem, sint temporibus.</p>
        <p className="my-2 text-sm text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore quam magni perspiciatis repellendus vero quod ipsam voluptatem possimus ipsum quae. Recusandae quisquam quibusdam deleniti ipsam culpa odio asperiores vitae iure, explicabo corrupti ipsa modi est excepturi quo placeat aliquid aliquam, reiciendis cum necessitatibus magnam. Minus temporibus illo voluptates incidunt nam corporis reprehenderit numquam velit minima, quos deserunt nostrum qui rem dolore consequatur sit nemo inventore. Maiores nostrum, iste a nemo assumenda dicta rem repudiandae tempora modi alias ad aspernatur voluptate. Voluptatum a nobis ad nesciunt sit nemo consectetur minus voluptate, ipsam, atque, dolor dolore cum magni! Quasi quod tenetur asperiores! Fuga voluptates beatae commodi saepe dignissimos perspiciatis tempora earum ab minus natus eos quidem culpa nemo magni ea mollitia dolorem, quod assumenda ipsum enim repellat veniam. Eligendi, excepturi repellendus explicabo nemo facilis aperiam sequi eaque deserunt nulla autem delectus id deleniti sint fugit rerum eveniet minima quo ducimus nostrum accusantium? A natus, cupiditate quibusdam ipsa voluptatibus nesciunt odit commodi? Tempora adipisci accusamus sequi tempore ea porro maxime earum fugit nihil dolores exercitationem sapiente voluptas nesciunt, est similique, corporis libero eum aspernatur aliquid recusandae ratione nisi! Fuga repellat facere repudiandae nulla voluptas suscipit sed hic minima incidunt amet molestiae, doloremque et?</p>
        <p className="my-2 text-sm text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam optio recusandae, nostrum enim aliquid voluptate neque fugit, accusamus dolorem placeat ipsa. Iure, ut, praesentium ad numquam impedit laborum ipsum reprehenderit voluptas cupiditate eos saepe suscipit minima ducimus nobis sequi!</p>
        <p className="my-2 text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt corporis nostrum corrupti qui! Quam doloribus consectetur accusamus fugit minima quas eos cumque similique, obcaecati porro, qui eius cupiditate soluta neque ex natus. Porro temporibus expedita quaerat laudantium quibusdam ducimus distinctio, voluptatibus cumque, quidem fuga omnis hic quo consequatur aliquid ipsum consectetur, culpa laborum laboriosam error corrupti. Nulla iste inventore architecto.</p>
        </div>
        {/* <div className="my-5 mx-2 flex justify-center">
        <div className="flex gap-2 items-center max-lg:hidden">
            <button className="btn btn-success"><MdThumbUp/>Like</button>
            <button className="btn btn-error"><MdThumbDown/>DisLike</button>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default PostDetails;