import { makeAutoObservable } from "mobx"
import { fillial, course, group, pupil } from "./initialState"
class Education {
    constructor() {
        this.fillial = fillial
        this.course = course
        this.group = group
        this.pupil = pupil
        makeAutoObservable(this)
    }

    // BRANCH
    addFillial(subFillial) {
        this.fillial.push(subFillial)
    }

    getBranchSingle(id) {
        return this.fillial.filter(item => item.id == id)
    }

    getBranchCourses(id) {
        let arr = this.course.filter(item =>
            item.fillialId.find(fil => fil == id) ? item : null
        )

        return arr
    }

    addCourse(course) {
        this.course.push(course)
    }

    getSingleCourse(id) {
        return this.course.filter(item => item.id == id)
    }

    getGroupsBranch(branchId, courseId) {
        return this.group.filter(item =>
            item.courrseId == courseId && item.fillialId == branchId ?
                (
                    item.course =
                    this.course.filter(courseItem =>
                        courseItem.id == courseId
                    )
                    ,
                    item.fillial = {
                        ...this.fillial.filter(fillialItem =>
                            fillialItem.id == branchId
                        )
                    }
                ) :
                null
        )
    }

    getPupil(groupId) {
        return this.pupil.filter(item =>
            item.groupId == groupId ?
                item.group = this.group.filter(el => el.id == groupId)
                :
                null
        )
    }
}

export const education = new Education()
