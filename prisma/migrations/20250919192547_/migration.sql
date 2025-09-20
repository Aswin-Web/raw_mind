-- CreateTable
CREATE TABLE "public"."FileConfig" (
    "id" SERIAL NOT NULL,
    "version" TEXT NOT NULL,
    "orignal_file_name" TEXT NOT NULL,
    "internal_file_name" TEXT NOT NULL,
    "raw_data" TEXT,
    "meaning_ful_data" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FileConfig_pkey" PRIMARY KEY ("id")
);
