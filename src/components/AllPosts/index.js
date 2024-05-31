/** @format */

import React, { useState } from "react";
import Post from "../Post";
import Link from "next/link";
import SearchBox from "./SearchBox";

const AllPosts = ({ posts }) => {
	const [searchedPosts, setSearchedPost] = useState([]);

	return (
		<div className="w-full">
			<div className=" flex flex-row justify-between p-3 border border-b-2 w-full items-center">
				<div>
					<SearchBox
						posts={posts}
						setSearchedPost={setSearchedPost}
						searchedPosts={searchedPosts}
					/>
				</div>
				<Link href={"/savedPosts"}>
					<div className>Saved Posts</div>
				</Link>
			</div>

			<div className="flex flex-col md:mx-[30%] gap-3 mt-2">
				{searchedPosts?.length > 0
					? searchedPosts.map((post) => <Post post={post} />)
					: posts.map((post) => <Post post={post} />)}
			</div>
		</div>
	);
};

export default AllPosts;
