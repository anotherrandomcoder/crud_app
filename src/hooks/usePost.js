import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        // console.log(' отработала getSortedPost')
        // console.log(sort)
        if (sort) {
            if (sort === 'post_number') {
                // console.log([...posts].sort((a, b) => a.id - b.id))
                return [...posts].sort((a, b) => a.id - b.id)
            }
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    }, [sort, posts])
    return sortedPosts;
}


export const usePosts = (posts, sort, query) => {
    // console.log(sort)  // по номеру - прилетает post_number

    const sortedPosts = useSortedPosts(posts, sort)

    const sortedAndSearchedPosts = useMemo(() => {
        // console.log(sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery)))
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedPosts])
    return sortedAndSearchedPosts;
}