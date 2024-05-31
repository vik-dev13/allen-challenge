/** @format */

import React, { useEffect, useState } from "react";

const SearchBox = ({ posts, searchedPosts, setSearchedPost }) => {
	const [searchText, setSearchText] = useState("");
	const handleOnchange = (e) => {
		setSearchText(e.target.value);
	};

	const handleClear = () => {
		setSearchText("");
		setSearchedPost([]);
	};

	useEffect(() => {
		if (searchText) {
			const searchPost = posts.filter((post) =>
				post.title.includes(searchText),
			);
			setSearchedPost([...searchPost]);
		}
	}, [searchText]);

	return (
		<div className="flex flex-row w-full ">
			<div className="border-2 rounded-[50px] px-2 py-1 ">
				<input
					type="text"
					className="border-none outline-none"
					value={searchText}
					onChange={handleOnchange}
				/>
				<button onClick={handleClear}>
					<span>X</span>
				</button>
			</div>
		</div>
	);
};

export default SearchBox;
