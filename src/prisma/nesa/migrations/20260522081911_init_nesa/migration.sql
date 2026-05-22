-- CreateEnum
CREATE TYPE "NesaResult" AS ENUM ('PASS', 'FAIL');

-- CreateTable
CREATE TABLE "nesa_records" (
    "id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "national_id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "option" TEXT NOT NULL,
    "year_completed" INTEGER NOT NULL,
    "grades" JSONB NOT NULL,
    "result" "NesaResult" NOT NULL DEFAULT 'PASS',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "nesa_records_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "nesa_records_student_id_key" ON "nesa_records"("student_id");

-- CreateIndex
CREATE UNIQUE INDEX "nesa_records_national_id_key" ON "nesa_records"("national_id");
