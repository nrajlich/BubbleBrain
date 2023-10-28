import { NextResponse } from "next/server";
import data from '../../data'

export default async function fecthCourses (req, res) {
    const search = req.query.search;
    const results = data.filter((course) => {
        return course.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    });

    res.status(200).json(results);
}