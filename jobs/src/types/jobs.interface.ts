
export interface Job {
    employer_name:                        string;
    employer_logo:                        string;
    employer_website:                     null;
    employer_company_type:                null;
    job_publisher:                        string;
    job_id:                               string;
    job_employment_type:                  string;
    job_title:                            string;
    job_apply_link:                       string;
    job_apply_is_direct:                  boolean;
    job_apply_quality_score:              number;
    job_description:                      string;
    job_is_remote:                        boolean;
    job_posted_at_timestamp:              number;
    job_posted_at_datetime_utc:           string;
    job_city:                             string | null;
    job_state:                            null;
    job_country:                          string;
    job_latitude:                         number;
    job_longitude:                        number;
    job_benefits:                         string[];
    job_google_link:                      string;
    job_offer_expiration_datetime_utc:    null;
    job_offer_expiration_timestamp:       null;
    job_required_experience:              JobRequiredExperience;
    job_required_skills:                  null;
    job_required_education:               JobRequiredEducation;
    job_experience_in_place_of_education: boolean;
    job_min_salary:                       null;
    job_max_salary:                       null;
    job_salary_currency:                  null;
    job_salary_period:                    null;
    job_highlights:                       JobHighlights;
    job_job_title:                        string;
    job_posting_language:                 string;
    job_onet_soc:                         string;
    job_onet_job_zone:                    string;
}

export interface JobHighlights {
    Qualifications:   string[];
    Responsibilities: string[];
    Benefits:         string[];
}

export interface JobRequiredEducation {
    postgraduate_degree:                  boolean;
    professional_certification:           boolean;
    high_school:                          boolean;
    associates_degree:                    boolean;
    bachelors_degree:                     boolean;
    degree_mentioned:                     boolean;
    degree_preferred:                     boolean;
    professional_certification_mentioned: boolean;
}

export interface JobRequiredExperience {
    no_experience_required:        boolean;
    required_experience_in_months: null;
    experience_mentioned:          boolean;
    experience_preferred:          boolean;
}
