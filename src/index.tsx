try {
    throw new Error("error");
} catch (e: unknown) {
    console.error(e);
}
