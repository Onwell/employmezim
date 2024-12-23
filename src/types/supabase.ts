export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          company_name: string | null
          is_admin: boolean
          created_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          company_name?: string | null
          is_admin?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          company_name?: string | null
          is_admin?: boolean
          created_at?: string
        }
      }
      jobs: {
        Row: {
          id: string
          user_id: string
          title: string
          company: string
          location: string
          type: string
          description: string
          requirements: string[]
          posted_at: string
          expires_at: string
          status: 'pending' | 'approved' | 'rejected'
          admin_notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          company: string
          location: string
          type: string
          description: string
          requirements: string[]
          posted_at?: string
          expires_at: string
          status?: 'pending' | 'approved' | 'rejected'
          admin_notes?: string | null
        }
        Update: {
          status?: 'pending' | 'approved' | 'rejected'
          admin_notes?: string | null
        }
      }
    }
  }
}