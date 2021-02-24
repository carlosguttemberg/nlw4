import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('surveys')
class Survey {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column()
    title: string;

    @Column()
    description: string;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
export default Survey;