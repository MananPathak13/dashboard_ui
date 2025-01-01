"use server";
import { ClassSchema, SubjectSchema, TeacherSchema } from "./formValidationSchemas";
import prisma from "./prisma";
import { clerkClient } from "@clerk/clerk-sdk-node";

type CurrentState = { success: boolean, error: boolean }

export const createSubject = async (currentState: CurrentState, data: SubjectSchema) => {
    try {
        await prisma.subject.create({
            data: {
                name: data.name,
                teachers: {
                    connect: data.teachers.map((teacherId) => ({ id: teacherId })),
                }
            }
        });
        // revalidatePath("/list/subjects");
        return { success: true, error: false }
    } catch (error) {
        console.log(error);
        return { success: false, error: true }
    }
}

export const updateSubject = async (currentState: CurrentState, data: SubjectSchema) => {
    try {
        await prisma.subject.update({
            where: {
                id: data.id
            },
            data: {
                name: data.name,
                teachers: {
                    set: data.teachers.map((teacherId) => ({ id: teacherId }))
                }
            }
        });
        return { success: true, error: false }
    } catch (error) {
        console.log(error);
        return { success: false, error: true }
    }
}

export const deleteSubject = async (currentState: CurrentState, data: FormData) => {
    try {
        const id = data.get("id") as string
        await prisma.subject.delete({
            where: {
                id: parseInt(id)
            },
        });
        return { success: true, error: false }
    } catch (error) {
        console.log(error);
        return { success: false, error: true }
    }
}

//Class
export const createClass = async (currentState: CurrentState, data: ClassSchema) => {
    try {

        await prisma.class.create({ data });
        // revalidatePath("/list/subjects");
        return { success: true, error: false }
    } catch (error) {
        console.log(error);
        return { success: false, error: true }
    }
}

export const updateClass = async (currentState: CurrentState, data: ClassSchema) => {
    try {
        await prisma.class.update({
            where: {
                id: data.id
            },
            data
        });
        return { success: true, error: false }
    } catch (error) {
        console.log(error);
        return { success: false, error: true }
    }
}

export const deleteClass = async (currentState: CurrentState, data: FormData) => {
    try {
        const id = data.get("id") as string
        await prisma.class.delete({
            where: {
                id: parseInt(id)
            },
        });
        return { success: true, error: false }
    } catch (error) {
        console.log(error);
        return { success: false, error: true }
    }
}


//Teacher
export const createTeacher = async (currentState: CurrentState, data: TeacherSchema) => {
    try {

        const user = await clerkClient.users.createUser({
            username: data.username,
            password: data.password,
            firstName: data.name,
            lastName: data.surname
        });

        await prisma.teacher.create({
            data: {
                id: user.id,
                username: data.username,
                name: data.name,
                surname: data.surname,
                email: data.email || null,
                phone: data.phone || null,
                address: data.address,
                bloodType: data.bloodType,
                birthday: data.birthday || "",
                sex: data.sex,
                img: data.img || null,
                subjects: {
                    connect: data.subjects?.map((subjectId: string) => ({
                        id: parseInt(subjectId)
                    }))
                }
            }
        });
        // revalidatePath("/list/subjects");
        return { success: true, error: false }
    } catch (error) {
        console.log(error);
        return { success: false, error: true }
    }
}

export const updateTeacher = async (currentState: CurrentState, data: TeacherSchema) => {
    try {
        await prisma.teacher.update({
            where: {
                id: data.id
            },
            data
        });
        return { success: true, error: false }
    } catch (error) {
        console.log(error);
        return { success: false, error: true }
    }
}

export const deleteTeacher = async (currentState: CurrentState, data: FormData) => {
    try {
        const id = data.get("id") as string
        await prisma.teacher.delete({
            where: {
                id: parseInt(id)
            },
        });
        return { success: true, error: false }
    } catch (error) {
        console.log(error);
        return { success: false, error: true }
    }
}
