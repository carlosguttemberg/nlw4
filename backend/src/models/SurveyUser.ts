import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import User from "./User";
import Survey from "./Survey";

@Entity('surveys_users')
class SurveyUser {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({name: "user_id"})
    user: User;

    @Column()
    survey_id: string;

    @ManyToOne(() => Survey)
    @JoinColumn({name: "survey_id"})
    survey: Survey;
    
    @CreateDateColumn()
    created_at: Date;

    @Column()
    value: number;

    @UpdateDateColumn()
    updated_at: Date;
}
export default SurveyUser;