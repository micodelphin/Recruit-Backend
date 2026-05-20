-- CreateTable
CREATE TABLE "nida_profiles" (
    "id" TEXT NOT NULL,
    "national_id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "place_of_birth" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "father_name" TEXT NOT NULL,
    "mother_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "nida_profiles_pkey" PRIMARY KEY ("id")
);

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
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "nesa_records_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "nida_profiles_national_id_key" ON "nida_profiles"("national_id");

-- CreateIndex
CREATE UNIQUE INDEX "nesa_records_student_id_key" ON "nesa_records"("student_id");

-- CreateIndex
CREATE UNIQUE INDEX "nesa_records_national_id_key" ON "nesa_records"("national_id");

-- AddForeignKey
ALTER TABLE "nesa_records" ADD CONSTRAINT "nesa_records_national_id_fkey" FOREIGN KEY ("national_id") REFERENCES "nida_profiles"("national_id") ON DELETE RESTRICT ON UPDATE CASCADE;
