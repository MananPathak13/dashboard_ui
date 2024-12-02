"use server";
import { revalidatePath } from "next/cache";
import { ClassSchema, SubjectSchema, TeacherSchema } from "./formValidationSchemas";
import prisma from "./prisma";

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

export const createTeacher = async (data: TeacherSchema) => {
    console.log(data + " in the server")
}


//Class
export const createClass = async (currentState: CurrentState, data: ClassSchema) => {
    try {
        const formattedData = {
            ...data,
            supervisorId: data.supervisorId || null, // Ensure null or string
        };

        await prisma.class.create({ data: formattedData });
        return { success: true, error: false };
        // revalidatePath("/list/subjects");
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
            data: {

            }
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
