type ffiType = "i8" | "u8" | "i16" | "u16" | "i32" | "u32" | "i64" | "u64" | "usize" | "isize" | "f32" | "f64" | "void" |
                "pointer" | "buffer" | "function" | "struct";

export interface Symbol {
  parameters: ffiType[] | [],
  result: ffiType,
};
