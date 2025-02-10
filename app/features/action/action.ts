"use server";

export async function updateEmail(_prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  return await handleUpdateEmail(email);
}

async function handleUpdateEmail(email: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("update email", email);

  if (email === "hello@email.com") {
    return {
      success: true,
      message: "Updated email successfully",
      data: {
        email: "hello@email.com",
      },
    };
  }

  return {
    success: false,
    message: "Cound not update email. Please use hello@email.com",
    data: null,
  };
}
